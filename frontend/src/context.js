import React, { Component, createContext } from 'react'
import Swal from 'sweetalert2'
import MY_SERVICE from './services/AuthService'
import "mapbox-gl/dist/mapbox-gl.css";
import "react-map-gl-geocoder/dist/mapbox-gl-geocoder.css";
import { GeoJsonLayer } from "deck.gl";


export const MyContext = createContext()

class MyProvider extends Component {
    state = {
        loggedUser: false,
        id: '',
        formSignup: {
          fullName: "",
          email: "",
          telephoneNumber: "",
          password: "",
          university: "",
          departureTime: "",
          returnTime: "",
          photo: "",
          role: "",
          carModel: "",
          carColor: ""
        },
        signupFinished: 0,
        formSignupStep: 0,
        formCreateStep: 0,
        formLogin: {
          email: "",
          password: ""
        },
        user: {},
        formCreate: {
            rideDirection : "",
            universityDirection : "",
            departureTime: "",
            numberPlaces: "",
            driver: "",
            coords: {
                lat: "",
                long: "",
                address: ""
            }
        },
        foundRides: [],
        viewport: {
            latitude: 37.7577,
            longitude: -122.4376,
            zoom: 8
          },
        searchResultLayer: null,
        userCoordinates : []
      }
      //---MAPBOX---
      mapRef = React.createRef();

      handleViewportChange = viewport => {
        this.setState({
          viewport: { ...this.state.viewport, ...viewport }
        });
      };

      handleGeocoderViewportChange = viewport => {
        const geocoderDefaultOverrides = { transitionDuration: 1000 };
    
        return this.handleViewportChange({
          ...viewport,
          ...geocoderDefaultOverrides
        });
      };

      handleOnResult = event => {
        console.log(event.result);
        this.setState({
            ...this.state,
            formCreate : {
                ...this.state.formCreate,
                coords: {
                    lat: event.result.center[0],
                    long: event.result.center[1],
                },
                placeName: event.result.place_name
            }
        })
        this.setState({
          searchResultLayer: new GeoJsonLayer({
            id: "search-result",
            data: event.result.geometry,
            getFillColor: [255, 0, 0, 128],
            getRadius: 1000,
            pointRadiusMinPixels: 10,
            pointRadiusMaxPixels: 10
          })
        });
      };

      //------------

      handleChangeRole = (value) => {
        this.setState({
            ...this.state,
            formSignup: {
                ...this.state.formSignup,
                role: value
            }
        })
      }

      handleChangeUniversity = (value) => {
        this.setState({
            ...this.state,
            formSignup: {
                ...this.state.formSignup,
                university: value
            }
        })
      }

      handleChangeUniversityDirection = (value) => {
        this.setState({
            ...this.state,
            formCreate: {
                ...this.state.formCreate,
                universityDirection: value
            }
        })
      }

      handleChangeRideDirection = (value) => {
          console.log(value)
        this.setState({
            ...this.state,
            formCreate : {
                ...this.state.formCreate,
                rideDirection : value
            }
        })
      }

      handleChangeNumberPlaces = (value) => {
        this.setState({
            ...this.state,
            formCreate : {
                ...this.state.formCreate,
                numberPlaces : value
            }
        })
      }

      handleChangeDepartureCreate = (value, string) => {
        this.setState({
            ...this.state,
            formCreate: {
                ...this.state.formCreate,
                departureTime: string
            }
        })
      }

      handleChangeReturn = (value, string) => {
        this.setState({
            ...this.state,
            formSignup: {
                ...this.state.formSignup,
                returnTime: string
            }
        })
      }

      handleChangeDeparture = (value, string) => {
        this.setState({
            ...this.state,
            formSignup: {
                ...this.state.formSignup,
                departureTime: string
            }
        })
      }

      componentDidMount() {
        this.setState({userCoordinates : []})
        navigator.geolocation.getCurrentPosition(position => {
            const userCoordinates = [position.coords.longitude, position.coords.latitude];
            this.setState({userCoordinates: userCoordinates})
        });
        setTimeout(this.findRides(), 200) 
        if (document.cookie) {
          MY_SERVICE.getUser()
            .then(({ data }) => {
              this.setState({ loggedUser: true, user: data.user })
              Swal.fire(`Bienvenido ${data.user.fullName} `, '', 'success')
            })
            .catch(err => console.log(err))
        }
        if (localStorage.user){
            this.setState({
                id: JSON.parse(localStorage.getItem('user'))._id
            })
        }
      }

      componentDidUpdate = () => {
        // MY_SERVICE.feed()
        // .then(({data}) => {
        //     console.log(data)
        // })
        // .catch(err => console.log(err))
        
        navigator.geolocation.getCurrentPosition(position => {
            const userCoordinates = [position.coords.longitude, position.coords.latitude];
            this.setState({userCoordinates})     
        });
        
        if (localStorage.user && !this.state.id){
            this.setState({
                id: JSON.parse(localStorage.getItem('user'))._id
            })
        }
      }

      findRides = () => {
        const all = {
            ...this.state.userCoordinates
        }
        MY_SERVICE.feed(all)
            .then(({data: {ride}}) => {
                this.setState({
                    ...this.state,
                    foundRides: ride
                })
                
            })
            .catch(err => console.log(err))
      }

      handleSignup = async e => {
        e.preventDefault()
        const { data } = await MY_SERVICE.signup(this.state.formSignup)
        Swal.fire(`Bienvenido ${data.usr.fullName}`, 'Su cuenta ha sido creada', 'success')
      }

      handleLogin = (e, cb) => {
        e.preventDefault()
        MY_SERVICE.login(this.state.formLogin)
          .then(({ data }) => {
            this.setState({ loggedUser: true, user: data.user })
            let userSaved = JSON.stringify(data.user)
            localStorage.setItem("user", userSaved);
            cb()
            Swal.fire(`Bienvenido ${data.user.fullName} `, '', 'success')
          })
          .catch(err => {
            Swal.fire('Usuario o contraseña erroneos')

            console.log(err)
          })
      }

      handleLogout = async e => {
        e.preventDefault()
        // await MY_SERVICE.logout()
        window.localStorage.clear()
        this.setState({ loggedUser: false, user: {} })
      }

      nextStep1 = (e) => {
        e.preventDefault()
        const {fullName, password} = this.state.formSignup
        if (fullName !== "" && password !== ""){
          this.setState({
              formSignupStep : ++this.state.formSignupStep
          })  
        }
        else {
            Swal.fire('Campos sin rellenar')    
        }
      }

      nextStep2 = (e) => {
        e.preventDefault()
        const {email, telephoneNumber, role, university} = this.state.formSignup
        if (email !== "" && telephoneNumber !== "" && role !== "" && university !== ""){
            this.setState({
                formSignupStep : ++this.state.formSignupStep
            })
        }
        else {
            Swal.fire('Campos sin rellenar')
        }
    }

      nextCreateStep = () => {
        this.setState({
            ...this.state,
            formCreateStep : ++this.state.formCreateStep
        })
    }

      handleInput = (e, obj) => {
        const a = this.state[obj]
        const key = e.target.name
        a[key] = e.target.value
        this.setState({ obj: a })
      }

      handleSignupSubmit = (e, cb) => {
          e.preventDefault()
          const {role, departureTime, returnTime, carColor, carModel } = this.state.formSignup
          if (role === "driver" && departureTime !== "" && returnTime !== "" && carColor !== "" && carModel !== ""){
            this.handleSignup(e)
            this.setState({
                signupFinished : ++this.state.signupFinished
            })
            cb()
          }
          else if (role === "passenger" && departureTime !== "" && returnTime !== ""){
            this.handleSignup(e)
            this.setState({
                signupFinished : ++this.state.signupFinished
            })
            cb()
          }
          else {
            Swal.fire('Campos sin rellenar')
          }
      }

      handleCreate = async e => {
        e.persist()
        Swal.fire(`Viaje creado`, '', 'success')
        let data  = await MY_SERVICE.create(this.state.formCreate, JSON.parse(localStorage.user))
        data = null
        
      }

      handleCreateSubmit = (e, cb) => {
          e.preventDefault()
          const {coords, departureTime, numberPlaces, universityDirection, rideDirection} = this.state.formCreate
          const {lat, long} = coords
          const id = JSON.parse(localStorage.user)._id
          console.log(id)
          this.setState({
              ...this.state,
              formCreate : {
                  ...this.state.formCreate,
                  driver : this.state.id
              }
          })
          console.log(this.state.formCreate)
          if (coords !== "" && departureTime  !== "" && numberPlaces !== "" && universityDirection !== "" && rideDirection !== "" && lat !== "" && long !== "") {
              setTimeout(() => this.handleCreate(e),200)
              cb()
          }
          else {
            Swal.fire('Campos sin rellenar')
          }
      }

      showState = () => {
          console.log(this.state.formCreate)
      }

      endRide = async (e, elementId) => {
        e.preventDefault()
        const userId = JSON.parse(localStorage.user)._id
        const allItems = {
            elementId,
            userId
        }
        let data  = await MY_SERVICE.endRide({allItems})
      }
      
    render() {
        return (
            <MyContext.Provider
                value={{
                loggedUser: this.state.loggedUser,
                formSignup: this.state.formSignup,
                formLogin: this.state.formLogin,
                handleInput: this.handleInput,
                handleSignup: this.handleSignup,
                handleLogin: this.handleLogin,
                handleLogout: this.handleLogout,
                formSignupStep: this.state.formSignupStep,
                nextStep1 : this.nextStep1,
                nextStep2 : this.nextStep2,
                showState: this.showState,
                handleChangeRole: this.handleChangeRole,
                handleChangeUniversity: this.handleChangeUniversity,
                handleChangeUniversityDirection: this.handleChangeUniversityDirection,
                user : this.state.user,
                handleChangeDeparture : this.handleChangeDeparture,
                handleChangeReturn : this.handleChangeReturn,
                nextCreateStep : this.nextCreateStep,
                handleChangeRideDirection : this.handleChangeRideDirection,
                formCreateStep : this.state.formCreateStep,
                rideDirection : this.state.formCreate.rideDirection,
                handleSignupSubmit : this.handleSignupSubmit,
                signupFinished : this.state.signupFinished,
                viewport : this.state.viewport,
                searchResultLayer : this.state.searchResultLayer,
                mapRef : this.mapRef,
                handleViewportChange : this.handleViewportChange,
                handleOnResult : this.handleOnResult,
                handleGeocoderViewportChange : this.handleGeocoderViewportChange,
                handleChangeNumberPlaces : this.handleChangeNumberPlaces,
                handleChangeDepartureCreate : this.handleChangeDepartureCreate,
                handleCreateSubmit : this.handleCreateSubmit,
                findRides : this.findRides,
                foundRides: this.state.foundRides,
                endRide: this.endRide
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export default MyProvider