import Iubenda from 'react-iubenda-policy'

export default function Policy() {
  const policyID = 89564238
  return (
    <div>

      {/* Renders the Privacy Policy link with the text 'Privacy Policy' */}
      <Iubenda id={policyID}/>

      <Iubenda id={policyID} type='terms-and-conditions' styling='nostyle'>
        Terms and conditions
      </Iubenda>

      <Iubenda id={policyID} type='privacy' styling='white'>
        Privacy Policy
      </Iubenda>

      <Iubenda id={policyID} type='cookie' styling='black'>
        Cookie Policy
      </Iubenda>
    </div>
  )
}