import React from 'react';

class Piano extends React.Component {
    constructor(props) {
        super(props);
       
        this.notes = ["C","C#", "D", "D#","E","F","F#","G","G#", "A", "A#","B"];
        this.keyMap = {
			90: "C", //Z
			83: "C#", //S
			88: "D", //X
			68: "D#", //D
			67: "E", //C
			86: "F", //V
			71: "F#", //G
			66: "G", //B
			72: "G#", //H
			78: "A", //N
			75: "A#", //J
			77: "B", //M
			188: "C", //,
			76: "C#", //L
			190: "D", //.
			186: "D#", //;
			191: "E", // /
        }
        this.state = {
            octave: this.props.octave,
            instrument: this.props.instrument
        }

    }
        
	componentDidMount() {		
		document.onkeydown = (e) => {
			const note = this.keyMap[e.keyCode] + this.props.octave;
			this.props.audioPlayer.playNote(note);
		}
	}

	playNote = (item) => {
        const note = item + this.props.octave;
		this.props.audioPlayer.playNote(note);
	}

	renderPiano = () => {
		const piano = this.notes.map(item => {
			return (
				<button 
					className="key"
					onClick={(e) => {this.playNote(item);}}>
				</button>
			)
		})
		return piano;
	}

    render() {
        return (
            <div className="piano">
               <span>Piano here</span>
               {this.renderPiano(this.props.octave)}
            </div>
        )
    }
}

export default Piano;