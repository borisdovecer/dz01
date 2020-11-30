import React from 'react'
import KarteA from "./KarteA"
import KarteM from "./KarteM"

class Karte extends React.Component{
    state = {
        karte: [],
        audio: "",
        back: "",
        veliko: "",
        malo: "",
        arr: [],
        complete: false,
        completearr: []
    }

    componentDidMount() {
        let arrA = KarteA
        let arrM = KarteM

        if(this.props.slide === "a"){
            this.setState({
                karte: arrA.sort(() => Math.random() - 0.5),
                audio: "6.sada cemo da igramo igru memorije, pronadji dva ista slova.mp3",
                back:"karta-back-ljubicasta.png",
                veliko: "velikoa.png",
                malo: "maloa.png"
            })
        }
        if(this.props.slide === "m"){
            this.setState({
                karte: arrM.sort(() => Math.random() - 0.5),
                audio: "17.opet igramo igru memorije pronadji dva ista slova.mp3",
                back:"karta-back-oranz.png",
                veliko: "velikom.png",
                malo: "malom.png"

            })
        }
    }

    flip = (e) => {
        let id = e.target.attributes.id.value
        let card = this.state.karte
        let arr = this.state.arr
        if(!card[id].ck){
            card[id].animation = "flip-vertical-right"
            if(card[id].name === "upper"){
                card[id].image = this.state.veliko
                card[id].ck = true
                arr.push(card[id])
                this.setState( {karte: card, arr: arr} )
            }
            if(card[id].name === "lower"){
                card[id].image = this.state.malo
                card[id].ck = true
                arr.push(card[id])
                this.setState( {karte: card, arr: arr} )
            }
            this.compare()
        }
    }

    compare = () => {
        let card = this.state.karte
        let arr = this.state.arr
        let bakimg = this.state.back

        if(arr.length === 2){
            if(arr[0].name === arr[1].name){
                card.forEach( function (crd){
                    if(crd.name === arr[0].name){
                        console.log(arr)
                        crd.animation = "pulsate-bck"
                        crd.found = true
                    }
                })
                this.setState({arr:[]})
            }else{
                setTimeout( () => {
                card.forEach( function (crd){
                    if(!crd.found){
                        crd.image = bakimg
                        crd.ck = false
                        crd.animation = ""
                    }
                })
                this.setState({arr:[]})
                }, 1500 )
            }
        }
        this.complete()
    }

    complete = () => {
        let arr = []
        this.state.karte.forEach( crd => {
            if(crd.found){
                arr.push(true)
            }
        })

        if(arr.length === 4){

            this.setState({ complete: true })
        }
    }

    render() {
        return(
            <div className={"main color-change-2x"}>
                <audio
                    autoPlay
                    src={"./audio/" + this.state.audio}
                />
                {this.state.complete ? <button className="main-button" onClick={this.props.nextSlide}>Dalje</button> : null}
                <div className="row text-center" style={{padding: "90px"}}>
                        {this.state.karte.map( (card, i) =>
                            <div key={i} className="col-lg-3 col-md-6 col-sm-12">
                                <img
                                     id={i}
                                     name={card.name}
                                     src={'./slides/' + card.image}
                                     alt={'card'}
                                     className={card.animation}
                                     onClick={this.flip}
                                />
                            </div>
                        )}
                </div>
            </div>
            )
    }
}

export default Karte
