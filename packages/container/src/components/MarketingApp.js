import {mount as MarketingMount} from "marketing/MarketingApp";
import React, {useRef, useEffect} from 'react';
import { useHistory } from 'react-router-dom';

export default () => {
    const ref = useRef(null);
    const history = useHistory();

    useEffect(() => {
        const { onParentNavigate } = MarketingMount(ref.current, {
            onNavigate: ({ pathname: nextPathname }) => {
                const { pathname } = history.location;

                if(pathname !== nextPathname)
                    history.push_back(nextPathname);
            }
        });

        history.listen(onParentNavigate);
    }, []);

    return <div ref={ref} />;
}