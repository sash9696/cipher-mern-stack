import React from "react";
import { Formik, Form, Field } from "formik";
import { Link, useMatch, useNavigate } from "react-router-dom";

function Auth() {
  const isRegister = useMatch("/register");
  // console.log(isRegister)
const navigate  = useNavigate();
  async function onSubmit(values, actions){

    console.log('onSubmit',{values, actions})

    try {

        // api request to login
        console.log('User logged in ')

        //navigate the user back to home page
        navigate('/');

        
    } catch (error) {
        console.log('Error while onSubmit: ',error)
    }

  }
  const loginInitialValues = {email:'', password: ''};

  return (
    <div className="auth-page">
      <div className="container page">
        <div className="row">
          <div className="col-md-6 offset-md-3 col-xs-12">
            <h1 className="text-xs-center">Sign {isRegister ? "up" : "in"}</h1>
            <p className="text-xs-center">
              <Link to={isRegister ? "/login" : "/register"} >
                {isRegister ? "Have" : "Need"} 
                 &nbsp;an account?
              </Link>
            </p>

            <Formik

                onSubmit={onSubmit}

                initialValues={isRegister ? {...loginInitialValues, username:''} : loginInitialValues }
            >
              {() => (
                <>
                  {/* <FormErrors /> */}
                  <Form>

                    {isRegister && 
                       <fieldset className="form-group">
                       <Field
                         type="text"
                         name="username"
                         placeholder="Your Name"
                         className="form-control form-control-lg"
                       />
                     </fieldset>
                    }
                 

                    <fieldset className="form-group">
                      <Field
                        type="email"
                        name="email"
                        placeholder="Email"
                        className="form-control form-control-lg"
                      />
                    </fieldset>
                    <fieldset className="form-group">
                      <Field
                        type="password"
                        name="password"
                        placeholder="Password"
                        className="form-control form-control-lg"
                      />
                    </fieldset>
                    <button
                      type="submit"
                      className="btn btn-lg btn-primary pull-xs-right"
                    >
                      Sign {isRegister ? "up" : "in"}
                    </button>
                  </Form>
                </>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Auth;
