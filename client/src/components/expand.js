import React from 'react';
import { Icon } from 'semantic-ui-react'

const Expand = (props) =>
{
  if (props.sub !== null) {
    return(
      <Icon  name='plus' />
    )
  } else {
    return(
      <Icon  name='minus' />
    )
  }
}
export default Expand
