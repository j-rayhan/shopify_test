import React from 'react';
import {Grid, Card, Image , Button ,Icon} from 'semantic-ui-react'

const Order = (props) =>{
    return (
        <div>
            <Grid>
                <Grid.Column width={3}>
                </Grid.Column>
                <Grid.Column width={10}>
                    <Card fluid>
                        <Card.Content header={props.name} />
                        <Card.Content >
                        <Grid>
                            <Grid.Column width={4}>
                                <Image src={props.img} size='medium' target='_blank'/>
                            </Grid.Column>
                            <Grid.Column width={9}>
                                <div>
                                    {props.reviews}
                                </div>
                            </Grid.Column>
                            <Grid.Column width={3}>
                                <div>
                                    <strong style={{float:'right'}}>TK : {props.price}</strong>
                                </div>
                                <div>
                                    <Button floated='right' positive >Details</Button>
                                </div>
                            </Grid.Column>
                        </Grid>
                        </Card.Content>
                        
                    </Card>
                </Grid.Column>
                <Grid.Column width={3}>
                </Grid.Column>
            </Grid>
        </div>
    )
}

export default Order;