import React, { Component, createContext } from 'react'
import Swal from 'sweetalert2'
import MY_SERVICE from './services/AuthService'

export const MyContext = createContext()

class MyProvider extends Component {
    state = {
        loggedUser: false,
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
        formSignupStep: 0,
        formLogin: {
          email: "",
          password: ""
        },
        user: {},
      }

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

      handleChangeReturn = (value, string) => {
        console.log(string)
        this.setState({
            ...this.state,
            formSignup: {
                ...this.state.formSignup,
                returnTime: string
            }
        })
      }

      handleChangeDeparture = (value, string) => {
        console.log(string)
        this.setState({
            ...this.state,
            formSignup: {
                ...this.state.formSignup,
                departureTime: string
            }
        })
      }

      componentDidMount() {
        if (document.cookie) {
          MY_SERVICE.getUser()
            .then(({ data }) => {
              this.setState({ loggedUser: true, user: data.user })
              Swal.fire(`Welcome back ${data.user.name} `, '', 'success')
            })
            .catch(err => console.log(err))
        }
      }

      handleSignup = async e => {
        e.preventDefault()
        const { data } = await MY_SERVICE.signup(this.state.formSignup)
        Swal.fire(`Welcome ${data.usr.fullName}`, 'User created', 'success')
      }

      handleLogin = (e, cb) => {
        e.preventDefault()
        MY_SERVICE.login(this.state.formLogin)
          .then(({ data }) => {
            this.setState({ loggedUser: true, user: data.user })
            let userSaved = JSON.stringify(data.user)
            localStorage.setItem("user", userSaved);
          })
          .catch(err => {
            Swal.fire('Usuario o contraseña erroneos')

            console.log(err)
          })
      }

      handleLogout = async cb => {
        await MY_SERVICE.logout()
        window.localStorage.clear()
        this.setState({ loggedUser: false, user: {} })
        cb()
      }

      nextStep = () => {
          this.setState({
              formSignupStep : ++this.state.formSignupStep
          })
      }

      handleInput = (e, obj) => {
        const a = this.state[obj]
        const key = e.target.name
        a[key] = e.target.value
        this.setState({ obj: a })
      }

      showState = () => {
          console.log(this.state)
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
                nextStep : this.nextStep,
                showState: this.showState,
                handleChangeRole: this.handleChangeRole,
                handleChangeUniversity: this.handleChangeUniversity,
                user : this.state.user,
                handleChangeDeparture : this.handleChangeDeparture,
                handleChangeReturn : this.handleChangeReturn
                }}>
                {this.props.children}
            </MyContext.Provider>
        )
    }
}


export default MyProvider