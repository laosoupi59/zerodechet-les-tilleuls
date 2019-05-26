import React, { Component } from 'react'
import { Formik, Form } from 'formik'

import SmartInput from '../common-ui/SmartInput'

class FormikWrapper extends Component {

  state = {
    userHasValidateOnce: false
  }

  handleClickSubmit = () => {
    this.setState({userHasValidateOnce: true})
  }

  initValues = fieldNameList => {
    let result = {}
    fieldNameList.map(fName => result[fName] = '')
    return result
  }

  fillEmptyList = (list, size) => {
    return list === undefined 
      ? new Array(size).fill(undefined) 
      : list
  }

  render () {
    const { onSubmit } = this.props
    const { fieldNameList } = this.props
    const { fieldTypeList } = this.props
    const { fieldPlaceholderList } = this.props

    const nbOfFields = fieldNameList.length
    const fieldSubList = this.fillEmptyList(this.props.fieldSubList, nbOfFields)
    const fieldAutocompleteList = this.fillEmptyList(this.props.fieldAutocompleteList, nbOfFields)
    
    const { formSchema } = this.props
    const { userHasValidateOnce } = this.state

    const initialValues = this.initValues(fieldNameList)

    return (
      <>
        <Formik
          initialValues={initialValues}
          validationSchema={formSchema}
          validateOnChange={userHasValidateOnce}
          validateOnBlur={userHasValidateOnce}
          onSubmit={(values, { setSubmitting }) => {
            onSubmit(values)
            setSubmitting(false)
          }}
        >
          {({ isSubmitting, errors }) => (
            <Form>
              {fieldNameList.map((fieldName, i) => (
                <SmartInput 
                  type={fieldTypeList[i]} 
                  name={fieldName} 
                  placeholder={fieldPlaceholderList[i]} 
                  errorMsg={errors[fieldName]}
                  sub={fieldSubList[i]}
                  autocomplete={fieldAutocompleteList[i]}
                  key={i}
                />
              ))}
              <div className="form__validation">
                <button 
                  className='btn' 
                  type="submit" 
                  disabled={isSubmitting}
                  onClick={this.handleClickSubmit}
                >
                  valider
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </>
    )
  }
}

export default FormikWrapper