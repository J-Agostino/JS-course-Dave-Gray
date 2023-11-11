const playGuitar = () => {          // in line: export default function [myFunc()] { [code...] }
    return "Playing guitar!"
}

const shredding = () => {           // export const [myFunc] = () => { [code...] }
    return "Shredding some licks!"
}

const plucking = () => {            // export const [myFunc] = () => { [code...] }
    return "Plucking the strings..."
}

export default playGuitar // Export for use in other JS. Every module can have one default export.
export { shredding, plucking }

