import React from 'react';


const moonPhaseAssets = [
    {phase: "new", src:"https://upload.wikimedia.org/wikipedia/commons/a/a3/Emojione_1F311.svg"},
    {phase: "waning_crescent", src:"https://upload.wikimedia.org/wikipedia/commons/f/f0/Emojione_1F312.svg"},
    {phase: "first_quarter", src:"https://upload.wikimedia.org/wikipedia/commons/4/40/Emojione_1F313.svg"},
    {phase: "waxing_gibbous", src:"https://upload.wikimedia.org/wikipedia/commons/0/0f/Emojione_1F314.svg"},
    {phase: "full", src:"https://upload.wikimedia.org/wikipedia/commons/f/f7/Emojione_1F315.svg"},
    {phase: "waning_gibbous", src:"https://upload.wikimedia.org/wikipedia/commons/d/d8/Emojione_1F316.svg"},
    {phase: "third_quarter", src:"https://upload.wikimedia.org/wikipedia/commons/6/68/Emojione_1F317.svg"},
    {phase: "waxing_crescent", src:"https://upload.wikimedia.org/wikipedia/commons/1/10/Emojione_1F318.svg"},
]



const MoonPhase = props => {

    const moonStyle = (index) => {
        if(props.moonPhase === moonPhaseAssets[index].phase) {
            return {filter: "opacity(1)"}
        } else {
            return {filter: "opacity(.2)"}
        }
    }

    const phaseMap = moonPhaseAssets.map((i, index)=> (
        <div key={index} className="moon-phase">
            <img className="moon" src={i.src} style={moonStyle(index)}/>
        </div>
    ))

    return (
        <div>
            {props.moonPhase !== undefined ? 
                <div className="moon-phase-section"> 
                {/*<div className="bar mobile"/> */}
                    <div className='moon-phase-text'>MOON PHASE</div>
                    <div className="moon-phase-wrapper">
                        {phaseMap}
                    </div>
                {/*<div className="bar mobile"/> */}
                </div> : <div/>
            }

        </div>
    )
}

export default MoonPhase