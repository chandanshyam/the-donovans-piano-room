"use client";
import React, { useEffect } from 'react';


interface PianoProps {
    isShort: boolean;
  }
  

const Piano: React.FC<PianoProps> = ({isShort}) => {
    useEffect(() => {
        const shortPiano = document.getElementById('shortPiano');
        const longPiano = document.getElementById('longPiano');
        const pianoCheckbox = document.getElementById('piano-checkbox') as HTMLInputElement;

        pianoCheckbox.addEventListener('change', function () {
            if (this.checked) {
                shortPiano!.style.display = 'none';
                longPiano!.style.display = 'block';
            } else {
                shortPiano!.style.display = 'block';
                longPiano!.style.display = 'none';
            }
        });

        const pianoKeys = document.querySelectorAll('.piano-keys .key') as NodeListOf<HTMLElement>;
        const volumeSlider = document.querySelector('.volume-slider input') as HTMLInputElement;
        const keysCheckbox = document.querySelector('.keys-checkbox input') as HTMLInputElement;

        let allKeys: string[] = [];
        let audio = new Audio('tunes/C4.mp3');

        const playTune = (key: string) => {
            audio.src = `tunes/${key}.mp3`;
            audio.play();
            const clickedKeys = document.querySelectorAll(`[data-key="${key}"]`) as NodeListOf<HTMLElement>;
            clickedKeys.forEach((clickedKey) => {
                clickedKey.classList.add('active');
                setTimeout(() => {
                    clickedKey.classList.remove('active');
                }, 150);
            });
        };

        pianoKeys.forEach((key) => {
            allKeys.push(key.dataset.key!);
            key.addEventListener('click', () => playTune(key.dataset.key!));
        });

        const handleVolume = (e: Event) => {
            audio.volume = (e.target as HTMLInputElement).valueAsNumber;
        };

        const showHideKeys = () => {
            pianoKeys.forEach((key) => key.classList.toggle('hide'));
        };

        const pressedKey = (e: KeyboardEvent) => {
            if (allKeys.includes(e.key)) playTune(e.key);
        };

        keysCheckbox.addEventListener('click', showHideKeys);
        volumeSlider.addEventListener('input', handleVolume);
        document.addEventListener('keydown', pressedKey);

        return () => {
            keysCheckbox.removeEventListener('click', showHideKeys);
            volumeSlider.removeEventListener('input', handleVolume);
            document.removeEventListener('keydown', pressedKey);
        };
    }, []);

    return (
        <div className="wrapper">
            
            <div id="shortPiano">
    <ul className="piano-keys">
        <li className="key white" data-key="C3"><span>C3</span></li>
        <li className="key black" data-key="Db3"><span>C♯3/D♭3</span></li>
        <li className="key white" data-key="D3"><span>D3</span></li>
        <li className="key black" data-key="Eb3"><span>D♯3/E♭3</span></li>
        <li className="key white" data-key="E3"><span>E3</span></li>
        <li className="key white" data-key="F3"><span>F3</span></li>
        <li className="key black" data-key="Gb3"><span>F♯3/G♭3</span></li>
        <li className="key white" data-key="G3"><span>G3</span></li>
        <li className="key black" data-key="Ab3"><span>G♯3/A♭3</span></li>
        <li className="key white" data-key="A3"><span>A3</span></li>
        <li className="key black" data-key="Bb3"><span>A♯3/B♭3</span></li>
        <li className="key white" data-key="B3"><span>B3</span></li>
        <li className="key white" data-key="C4"><span>C4</span></li>
        <li className="key black" data-key="Db4"><span>C♯4/D♭4</span></li>
        <li className="key white" data-key="D4"><span>D4</span></li>
        <li className="key black" data-key="Eb4"><span>D♯4/E♭4</span></li>
        <li className="key white" data-key="E4"><span>E4</span></li>
        <li className="key white" data-key="F4"><span>F4</span></li>
        <li className="key black" data-key="Gb4"><span>F♯4/G♭4</span></li>
        <li className="key white" data-key="G4"><span>G4</span></li>
        <li className="key black" data-key="Ab4"><span>G♯4/A♭4</span></li>
        <li className="key white" data-key="A4"><span>A4</span></li>
        <li className="key black" data-key="Bb4"><span>A♯4/B♭4</span></li>
        <li className="key white" data-key="B4"><span>B4</span></li>
        <li className="key white" data-key="C5"><span>C5</span></li>
        <li className="key black" data-key="Db5"><span>C♯5/D♭5</span></li>
        <li className="key white" data-key="D5"><span>D5</span></li>
        <li className="key black" data-key="Eb5"><span>D♯5/E♭5</span></li>
        <li className="key white" data-key="E5"><span>E5</span></li>
        <li className="key white" data-key="F5"><span>F5</span></li>
        <li className="key black" data-key="Gb5"><span>F♯5/G♭5</span></li>
        <li className="key white" data-key="G5"><span>G5</span></li>
        <li className="key black" data-key="Ab5"><span>G♯5/A♭5</span></li>
        <li className="key white" data-key="A5"><span>A5</span></li>
        <li className="key black" data-key="Bb5"><span>A♯5/B♭5</span></li>
        <li className="key white" data-key="B5"><span>B5</span></li>
    </ul>
</div>


<div id="longPiano" style={{ display: 'none' }}>
    <ul className="piano-keys">
        <li className="key white" data-key="C2"><span>C2</span></li>
        <li className="key black" data-key="Db2"><span>C♯2/D♭2</span></li>
        <li className="key white" data-key="D2"><span>D2</span></li>
        <li className="key black" data-key="Eb2"><span>D♯2/E♭2</span></li>
        <li className="key white" data-key="E2"><span>E2</span></li>
        <li className="key white" data-key="F2"><span>F2</span></li>
        <li className="key black" data-key="Gb2"><span>F♯2/G♭2</span></li>
        <li className="key white" data-key="G2"><span>G2</span></li>
        <li className="key black" data-key="Ab2"><span>G♯2/A♭2</span></li>
        <li className="key white" data-key="A2"><span>A2</span></li>
        <li className="key black" data-key="Bb2"><span>A♯2/B♭2</span></li>
        <li className="key white" data-key="B2"><span>B2</span></li>
        {/* Include the keys from C3 to B5 as in the short piano */}
        <li className="key white" data-key="C6"><span>C6</span></li>
        <li className="key black" data-key="Db6"><span>C♯6/D♭6</span></li>
        <li className="key white" data-key="D6"><span>D6</span></li>
        <li className="key black" data-key="Eb6"><span>D♯6/E♭6</span></li>
        <li className="key white" data-key="E6"><span>E6</span></li>
        <li className="key white" data-key="F6"><span>F6</span></li>
        <li className="key black" data-key="Gb6"><span>F♯6/G♭6</span></li>
        <li className="key white" data-key="G6"><span>G6</span></li>
        <li className="key black" data-key="Ab6"><span>G♯6/A♭6</span></li>
        <li className="key white" data-key="A6"><span>A6</span></li>
        <li className="key black" data-key="Bb6"><span>A♯6/B♭6</span></li>
        <li className="key white" data-key="B6"><span>B6</span></li>
        <li className="key white" data-key="C7"><span>C7</span></li>
        <li className="key black" data-key="Db7"><span>C♯7/D♭7</span></li>
        <li className="key white" data-key="D7"><span>D7</span></li>
        <li className="key black" data-key="Eb7"><span>D♯7/E♭7</span></li>
        <li className="key white" data-key="E7"><span>E7</span></li>
    </ul>
</div>
</div>
    );
};

export default Piano;
