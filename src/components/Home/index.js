import React from 'react';
import Select from '../Select';
import Piano from '../Piano';
import AudioPlayer from "../../utils/AudioPlayer";


class Home extends React.Component {
    constructor() {
        super()
        
        this.octaves = ["1","2","3","4","5","6","7"];
        this.instruments = [
            "accordion","acoustic_bass","acoustic_grand_piano","acoustic_guitar_nylon","acoustic_guitar_steel",
            "agogo","alto_sax","applause","bagpipe","banjo","baritone_sax","bassoon","bird_tweet","blown_bottle",
            "brass_section","breath_noise","bright_acoustic_piano","celesta","cello","choir_aahs","church_organ",
            "clarinet","clavinet","contrabass","distortion_guitar","drawbar_organ","dulcimer","electric_bass_finger",
            "electric_bass_pick","electric_grand_piano","electric_guitar_clean","electric_guitar_jazz","electric_guitar_muted",
            "electric_piano_1","electric_piano_2","english_horn","fiddle","flute","french_horn","fretless_bass","fx_1_rain",
            "fx_2_soundtrack","fx_3_crystal","fx_4_atmosphere","fx_5_brightness","fx_6_goblins","fx_7_echoes","fx_8_scifi",
            "glockenspiel","guitar_fret_noise","guitar_harmonics","gunshot","harmonica","harpsichord","helicopter",
            "honkytonk_piano","kalimba","koto","lead_1_square","lead_2_sawtooth","lead_3_calliope","lead_4_chiff",
            "lead_5_charang","lead_6_voice","lead_7_fifths","lead_8_bass__lead","marimba","melodic_tom","music_box",
            "muted_trumpet","oboe","ocarina","orchestra_hit","orchestral_harp","overdriven_guitar","pad_1_new_age",
            "pad_2_warm","pad_3_polysynth","pad_4_choir","pad_5_bowed","pad_6_metallic","pad_7_halo","pad_8_sweep",
            "pan_flute","percussive_organ","piccolo","pizzicato_strings","recorder","reed_organ","reverse_cymbal",
            "rock_organ","seashore","shakuhachi","shamisen","shanai","sitar","slap_bass_1","slap_bass_2","soprano_sax",
            "steel_drums","string_ensemble_1","string_ensemble_2","synth_bass_1","synth_bass_2","synth_brass_1",
            "synth_brass_2","synth_choir","synth_drum","synth_strings_1","synth_strings_2","taiko_drum","tango_accordion",
            "telephone_ring","tenor_sax","timpani","tinkle_bell","tremolo_strings","trombone","trumpet","tuba","tubular_bells",
            "vibraphone","viola","violin","voice_oohs","whistle","woodblock","xylophone"
            ]

        this.state = {
            selectedOctave: this.octaves[3],
            selectedInstrument: this.instruments[0]
        }
        this.audioPlayer = AudioPlayer();
        this.audioPlayer.setInstrument(this.state.selectedInstrument);
        
    }

    componentDidMount() {
        console.log('home componenetDidMount: ')
        console.log(this.state.selectedInstrument);
        console.log(this.state.selectedOctave);
    }

    changeOctave = (value) => {
        this.setState({selectedOctave: value});
    }

    changeInstrument = (value) => {
        this.setState({selectedInstrument: value});
        this.audioPlayer.setInstrument(value);
    }

    render() {
        return (
            <div className="home">

                <span>Current Octave: {this.state.selectedOctave}</span>
                <Select options={this.octaves} name="Octave: " onChange={this.changeOctave}/>
                
                <span>Current Instrument: {this.state.selectedInstrument}</span>
                <Select options={this.instruments} name="Instrument: " onChange={this.changeInstrument}/>
                
                <Piano 
                    octave={this.state.selectedOctave} 
                    instrument={this.state.selectedInstrument}
                    audioPlayer={this.audioPlayer}
                />
            </div>
        )
    }
}

export default Home;