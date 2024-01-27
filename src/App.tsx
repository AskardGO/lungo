import {useEffect, useState, useRef, ReactNode, MouseEventHandler, MouseEvent} from 'react';
import './App.scss';
import {Button, Card, CardActions, CardContent, Fade, Tooltip, Typography} from '@mui/material';
import {Telegram, GitHub, LinkedIn} from "@mui/icons-material";

import gsap from 'gsap';

const LoadingDots = () => {
    const [dotsCount, setDotsCount] = useState(1);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDotsCount((prevCount) => (prevCount >= 3 ? 1 : prevCount + 1));
        }, 500);

        return () => clearInterval(intervalId);
    }, []);

    const dots = '.'.repeat(dotsCount);

    return <div>{dots}</div>;
};

const IconButton = ({icon, onClick, tooltipTitle}: { icon: ReactNode, tooltipTitle?: string, onClick?: MouseEventHandler<HTMLButtonElement> }) => {

    const [isButtonDisabled, setIsButtonDisabled] = useState(false)
    const buttonRef = useRef(null);
    const mirrorRef = useRef(null)

    const onClickHandler = (event: MouseEvent<any>) => {

        setIsButtonDisabled(true)

        const tl = gsap.timeline({
            onComplete: () => {
                resetMirrorAnimation();
                setIsButtonDisabled(false)
                onClick && onClick(event);
            },
        });

        tl.to(mirrorRef.current, {scale: 1.6, duration: 1, ease: 'power2.inOut', opacity: 0});

    }

    const resetMirrorAnimation = () => {
        gsap.set(mirrorRef.current, {scale: 1, opacity: 1});
    }

    return (
        <Tooltip
            TransitionComponent={Fade}
            TransitionProps={{ timeout: 600 }}
            arrow
            title={tooltipTitle}
        >
            <div className='icon__button'>

                <button ref={buttonRef} className="icon-button" onClick={!isButtonDisabled ? onClickHandler : undefined}>
                    {icon}
                </button>

                {
                    buttonRef &&
                    <div ref={mirrorRef}>
                        {icon}
                    </div>
                }

            </div>
        </Tooltip>
    );
};
const App = () => {

    const [count, setCount] = useState(0);

    return (
        <div className="App">
            <h1>
                Askard's template... <hr/> React + Vite + Typescript + MUI5 + SASS + GSAP (Flip, ScrollTrigger,
                Draggable, TextPlugin)
            </h1>
            <div>
                <Card>
                    <CardContent>
                        <Typography sx={{fontSize: 24, display: "flex"}} color="text.secondary" gutterBottom>
                            Ready for coding <LoadingDots/>
                        </Typography>
                        <Typography variant="body2">
                            My contacts are below:
                        </Typography>
                    </CardContent>
                    <CardActions sx={{display: 'flex', justifyContent: 'space-around'}}>
                        <IconButton icon={<GitHub/>} tooltipTitle="GitHub"/>
                        <IconButton icon={<Telegram/>} tooltipTitle="Telegram"/>
                        <IconButton icon={<LinkedIn/>} tooltipTitle="LinkedIn"/>
                    </CardActions>
                </Card>
            </div>
        </div>
    );
}

export default App;
