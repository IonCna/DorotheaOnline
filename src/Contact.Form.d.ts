class ContactForm {
    form: HTMLElement
    name: HTMLElement
    lastName: HTMLElement
    eMail: HTMLElement
    msg: HTMLElement
    
    constructor()
    checkInputs(): void
    setError(input: HTMLElement, msg: string): void
    setSuccess(input: HTMLElement): void
    isEmail(Email: string): boolean
}