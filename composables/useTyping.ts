import { useCycleList } from '@vueuse/core';
import { sleep } from '~/utils/sleep';

export function useTyping(props: {
  initialPause: number;
  items: string[];
  pauseDuration: number;
  typeSpeed: number;
}) {
  const { next: nextText } = useCycleList(props.items);
  const textVisible = ref('');
  const textInvisible = ref('');
  const iterate = ref(true);

  function* _getNextChar(sentence: string) {
    for (let i = 0; i < sentence.length; i++) {
      yield sentence[i];
    }
  }

  async function doTyping() {
    await sleep(props.initialPause);
    do {
      const nextSentence = nextText();
      const nextChar = _getNextChar(nextSentence);
      textVisible.value = '';
      textInvisible.value = nextSentence;
      let finishedTyping = false;
      do {
        const { value, done } = nextChar.next();
        finishedTyping = done ?? false;
        if (value) {
          textVisible.value += value;
          textInvisible.value = textInvisible.value.substring(1);
        }
        await sleep(props.typeSpeed);
      } while (!finishedTyping);
      await sleep(props.pauseDuration);
    } while (iterate.value);
  }

  return { textVisible, textInvisible, doTyping, iterate };
}
