import {mount as AuthMount} from "auth/AuthApp";
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSignIn}) => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = AuthMount(ref.current, {
            initialPath: history.location.pathname,
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if(pathname !== nextPathname)
                    history.push(nextPathname);
            },
            onSignIn,
        });

        const unlisten = history.listen(onParentNavigate);

        return () => {
            unlisten(); // Cleanup history listener when the component unmounts
        };
    }, [history]);

    return <div ref={ref} />;
}
