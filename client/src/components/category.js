import React from 'react';
import { Grid } from 'semantic-ui-react'
import Expand  from './expand'

const Category = (props) =>
{
return(
 <div>
   <Grid onClick={props.klik}>
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <Expand sub={props.category.sub}/>
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
       <p>{props.category.name}</p>
    </Grid.Column>
    <Grid.Column mobile={16} tablet={8} computer={4}>
      <p>{props.category.count}</p>
    </Grid.Column>
  </Grid>



 </div>
)
}
export default Category
