import React from 'react'

import ErrorBoundary from '../ErrorBoundary/ErrorBoundary.jsx'
import { getPosts } from '../../actions/posts.jsx'
import Posts from '../Posts/Posts.jsx'
import Form from '../Form/Form.jsx'
import { useDispatch } from 'react-redux'
import { useState, useEffect } from 'react'
import { Container, Grow, Grid } from '@mui/material'
import styles from './style.jsx'

const Home = () => {
    const [currentId, setCurrentId] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  return (
    <Grow in>
          <Container maxWidth="xl">
            <Grid container spacing={3} sx={{ justifyContent: 'center', alignItems: 'stretch', flexDirection: 'column-reverse', '@media (min-width:600px)': { flexDirection: 'row' } }}>
              <Grid size={{ xs: 12, sm: 8 }}>
                <ErrorBoundary>
                  <Posts setCurrentId={setCurrentId} />
                </ErrorBoundary>
              </Grid>
              <Grid size={{ xs: 12, sm: 3 }}>
                <ErrorBoundary>
                  <Form currentId={currentId} setCurrentId={setCurrentId} />
                </ErrorBoundary>
              </Grid>
            </Grid>
            </Container>
        </Grow>
  )
}

export default Home