<script setup lang="ts">
import { AUTH_COOKIE_NAME } from '~/config/constants';
import type { VForm } from 'vuetify/components';

const localePath = useLocalePath();

/**
 * @description Check if user isn't already logged in
 */
async function validateToken() {
  const { data } = await unpackResponse<{
    valid: boolean;
  }>(
    useFetch('/api/auth/check', {
      method: 'POST',
      body: { token: useCookie(AUTH_COOKIE_NAME).value },
    }),
  );
  if (data && data.valid) {
    navigateTo(localePath({ name: 'admin-home' }));
  }
}

await validateToken();

const form = ref<VForm | null>(null);

const formData = ref({
  email: '',
  password: '',
});

const emailRules = ref([
  (v: string) => !!v || 'E-mail is required',
  (v: string) => /.+@.+\..+/.test(v) || v === 'admin' || 'E-mail must be valid',
]);

const passwordRules = ref([(v: string) => !!v || 'Password is required']);

async function onLogin() {
  if (await form.value?.validate()) {
    const { login } = useAuthSession();
    try {
      await login({ ...formData.value });
      navigateTo(localePath({ name: 'admin-home' }));
    } catch (e) {
      console.log(e);
    }
  }
}
</script>
<template>
  <v-container>
    <v-form ref="form">
      <v-text-field
        v-model="formData.email"
        label="Email"
        required
        :rules="emailRules"
      />
      <v-text-field
        v-model="formData.password"
        label="Password"
        required
        :rules="passwordRules"
        type="password"
      />
      <v-btn color="success" @click="onLogin">Login</v-btn>
    </v-form>
  </v-container>
</template>
