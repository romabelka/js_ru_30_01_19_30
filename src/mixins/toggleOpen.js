export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },
    toggleOpen(ev) {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    },
    handleOpen(ev) {
        ev && ev.preventDefault && ev.preventDefault()
        this.setState({
            isOpen: true
        })
    }
}