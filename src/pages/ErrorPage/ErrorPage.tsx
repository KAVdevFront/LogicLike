import { memo } from 'react';

import cls from './ErrorPage.module.scss';


const ErrorPage = memo(() => {

    return (
     <div className={cls.NotFoundPage}>
        Страница не найдена
     </div>
    );
});

export default ErrorPage
