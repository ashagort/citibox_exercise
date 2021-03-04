import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import IconButton from '@material-ui/core/IconButton'
import Grid from '@material-ui/core/Grid'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import FavoriteIcon from '@material-ui/icons/Favorite'

import './styles.css'
import { iconBeer } from '../../../Utils'

export const BeerCards = ({
  beers,
  getBeer,
  addFavoriteBeer
}) => {
  const handleInfoBeer = (beer) => {
    getBeer(beer.id)
  }

  const handleFavoriteBeer = (beer) => {
    addFavoriteBeer(beer)
  }

  const beersCard = () => {
    return beers.map((beer, index) => {
      return (
                <Grid item xs={12} sm={3} key={index}>
                    <Card className={'card_beer_content'} >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={'card_beer__avatar'}>
                                    {iconBeer(beer.abv)}
                                </Avatar>
                            }
                            title={beer.name}
                            subheader={beer.first_brewed}
                            className={'card_beer__header'}
                            onClick={() => handleInfoBeer(beer)}
                        />
                        <CardMedia
                            className={'card_beer__media'}
                            image={beer.image_url}
                            title={beer.name}
                            onClick={() => handleInfoBeer(beer)}
                        />
                        <CardContent className={'card_beer__content'} onClick={() => handleInfoBeer(beer)}>
                            {beer.tagline}
                        </CardContent>
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon onClick={() => handleFavoriteBeer(beer)} />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
      )
    })
  }

  return (
      <React.Fragment>
          <Grid container spacing={3}>
              {beersCard()}
          </Grid>
      </React.Fragment>

  )
}
