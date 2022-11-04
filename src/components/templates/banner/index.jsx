import classNames from 'classnames';
import React, { useCallback, useEffect, useState } from 'react';
import b1 from "../../../assets/images/banner/b1.jpg"
import b2 from "../../../assets/images/banner/b2.jpg"
import b3 from "../../../assets/images/banner/b3.jpg"
const bannner = [b1, b2, b3];
export const bannerData = [
    {
        city: 'Hoi An',
        country: 'Food & Shopping',
    },
       {
        city: 'Ha Long Bay',
        country: 'Entertainment',
    },
    {
        city: 'Tous Les Jours',
        country: 'Food',
    }
]
const Banner = () => {
    let imageParts = 4;
    let changeTo = null;
    let autoChangeTime = 4000;
    let change = 0;
    const [activeSlide, setActiveSlide] = useState(0);
    const [prevSlide, setPrevSlide] = useState(0);
    const [sliderReady, setSliderReady] = useState(false);

    useEffect(() => {
        return () => {
            window.clearTimeout(changeTo);
        }
    }, [changeTo])

    const runAutochangeTO = useCallback(() => {
        setTimeout(() => {
            changeSlides(1);
            runAutochangeTO();
        }, autoChangeTime)
    }, [autoChangeTime]);

    useEffect(() => {
        runAutochangeTO();
        setTimeout(() => {
            setActiveSlide(0);
            setSliderReady(true);
        }, 0);
    }, [change, runAutochangeTO]);

    const changeSlides = (step) => {
        window.clearTimeout(changeTo);
        change += step;
        const { length } = bannerData;
        if (change >= length) change = 0;
        if (change < 0) change = length - 1;
        let newPrevSlide = activeSlide;
        let newActiveSlide = newPrevSlide + change;
        if (newActiveSlide < 0) newActiveSlide = length - 1;
        if (newActiveSlide >= length) newActiveSlide = 0;
        setActiveSlide(newActiveSlide);
        setPrevSlide(newPrevSlide);
    }
    return (
        <div className={classNames('slider', { 's--ready': sliderReady })}>
            <div className="slider__slides">
                {bannerData.map((slide, index) => (
                    <div
                        className={classNames('slider__slide', { 's--active': activeSlide === index, 's--prev': prevSlide === index })}
                        key={slide.city}
                    >
                        <div className="slider__slide-content">
                            <h3 className="slider__slide-subheading">{slide.country || slide.city}</h3>
                            <h2 className="slider__slide-heading">
                                {slide.city.split('').map((l, index) => <span key={index}>{l}</span>)}
                            </h2>
                            <p className="slider__slide-readmore">read more</p>
                        </div>
                        <div className="slider__slide-parts">
                            {[...Array(imageParts).fill()].map((x, i) => (
                                <div className="slider__slide-part" key={i}>
                                    <div className="slider__slide-part-inner" style={{ backgroundImage: `url(${bannner[index]})` }} />
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <div className="slider__control" onClick={() => changeSlides(-1)} />
            <div className="slider__control slider__control--right" onClick={() => changeSlides(1)} />
        </div>
    )
}

export default Banner