var synth = flock.synth({
    synthDef: {
        ugen: "flock.ugen.sawOsc",
        freq: {
            ugen: "flock.ugen.mouse.cursor",
            rate: "control",
            mul: 880,
            add: 110,
            options: {
                axis: "width",
                interpolation: "exponential",
                target: ".CodeMirror"
            }
        },
        mul: {
            ugen: "flock.ugen.mouse.cursor",
            rate: "control",
            options: {
                axis: "height",
                target: ".CodeMirror"
            },
            mul: 0.5
        }
    }
});