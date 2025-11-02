import { toast } from 'vuetify-sonner';
import { COLORS } from '~/config/constants';

type TypeNotify = 'success' | 'error' | 'warning' | 'info';

export function useNotify(
  type: TypeNotify,
  message: string,
  timeout: number = 3000,
) {
  let color = COLORS.rosePink;
  switch (type) {
    case 'success':
      color = COLORS.success;
      break;
    case 'error':
      color = COLORS.error;
      break;
    case 'warning':
      color = COLORS.secondary;
      break;
    case 'info':
      color = COLORS.info;
      break;
  }
  // @ts-ignore (wrong definition inside vuetify-sonner)
  toast(message, {
    duration: timeout,
    cardProps: {
      color: color,
      class: 'toast',
    },
  });
}
