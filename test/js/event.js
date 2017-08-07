import Hello from './Hello'


class App extends Omi.Component {

    install(){
        this.name = 'Omi'
    }

    handleClick(e) {
        this.name = 'Omix'
        this.update()
    }

    style() {
        return `
        <style>
        h3{
            color:red;
            cursor: pointer;
        }
        `
    }

    render() {

        return <div>
                    <h3 onClick={this.handleClick.bind(this)}>b</h3>
                    <hello-tag name={this.name}></hello-tag>
                </div>
    }
}

document.body.innerHTML+='<div id="ctn2"></div>'

Omi.render(new App(),'#ctn2')

let ctn =  document.querySelector('#ctn2')
let innerH3 = ctn.querySelector('h3')
innerH3.click()



describe('base', function() {
    it('test event and update method', function() {
        expect(ctn.innerHTML).toBe('<div __s_2=""><h3 __s_2="">b</h3><div __s_hello-tag="" __s_3=""> Hello Omix!</div></div>')
    })
})
