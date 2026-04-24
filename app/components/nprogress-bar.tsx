import NProgress from 'nprogress';

import 'nprogress/nprogress.css';
import { useEffect } from 'react';
import { useNavigation } from 'react-router';

NProgress.configure({ showSpinner: false });

/** 路由切换时在页面顶部显示进度条 */
export function NProgressBar() {
  const navigation = useNavigation();

  useEffect(() => {
    if (navigation.state === 'loading') {
      NProgress.start();
    } else {
      NProgress.done();
    }
  }, [navigation.state]);

  return null;
}
