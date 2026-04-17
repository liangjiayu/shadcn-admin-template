import { useAccessStore, useGlobalStore } from '@/store';

export async function clientLoader() {
  const globalStore = useGlobalStore.getState();
  await globalStore.fetchInitData();
  const accessStore = useAccessStore.getState();
  await accessStore.initAccess();
  return null;
}

export { default } from '@/layout/basic-layout';
