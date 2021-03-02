import React from 'react'

import Card from '@material-ui/core/Card'
import Grid from '@material-ui/core/Grid'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import Avatar from '@material-ui/core/Avatar'
import Pagination from '@material-ui/lab/Pagination'

import './styles.css'

export const BeerList = ({
  getBeers,
  beers,
  getBeer
}) => {
  const handleInfoBeer = (beer) => {
    getBeer(beer.id)
  }

  const handleChangePage = (event, newPage) => {
    getBeers(newPage)
  }

  const iconBeer = (value) => {
    let icon = null
    if (value > 15) {
      icon = '\uD83E\uDD22'
      return icon
    } else if (value <= 15 && value > 8) {
      icon = '\uD83E\uDD74'
      return icon
    } else if (value <= 8 && value > 3) {
      icon = '\uD83D\uDE0A'
      return icon
    } else {
      icon = '\uD83D\uDE42'
      return icon
    }
  }

  const beersCard = () => {
    return beers.map((beer, index) => {
      return (
                <Grid item xs={6} sm={3} key={index}>
                    <Card className={'card_beer_content'} onClick={() => handleInfoBeer(beer)} >
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={'card_beer__avatar'}>
                                    {iconBeer(beer.abv)}
                                </Avatar>
                            }
                            title={beer.name}
                            subheader={beer.first_brewed}
                            className={'card_beer__header'}
                        />
                        <CardMedia
                            className={'card_beer__media'}
                            image={beer.image_url}
                            title={beer.name}
                        />
                        <CardContent className={'card_beer__content'}>
                            {beer.tagline}
                        </CardContent>
                    </Card>
                </Grid>
      )
    })
  }

  return (
    <div className={'beers__list'}>
        <Grid container spacing={3}>
            {beersCard()}
        </Grid>
        <Pagination count={10} onChange={handleChangePage} />
    </div>
  )
}
