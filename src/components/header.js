import { useState, useEffect } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
// import Login from './login-button'
// import Logout from './logout-button'
import { Button } from 'react-bootstrap'
import { supabase } from '../client'

export default function Header() {
  const { isAuthenticated, user } = useAuth0()
  const [url, setUrl] = useState('')
  const [title, setTitle] = useState('')
  const [name, setName] = useState('')

  const createSong = async (songUrl, songTitle, userName) => {
    console.log('inside createSong')
    console.log(songUrl)
    console.log(songTitle)
    console.log(userName)

    await supabase
      .from('songs')
      .insert([
        {
          url: songUrl,
          title: songTitle,
          name: userName,
        },
      ])
      .select()
    window.location.reload(false)
  }

  const openWidget = () => {
    // create the widget
    const widget = window.cloudinary.createUploadWidget(
      {
        cloudName: 'dafdkj8op',
        uploadPreset: 'ml_default',
      },
      (error, result) => {
        if (result.event === 'success') {
          console.log(result)
          console.log(result.info.secure_url)
          console.log(result.info.original_filename)
          console.log(user.name)

          if (result.info.is_audio === true) {
            const songUrl = result.info.secure_url
            const songTitle = result.info.original_filename
            const userName = user.name

            setUrl(songUrl)
            setTitle(songTitle)
            setName(userName)

            createSong(songUrl, songTitle, userName) // Call createSong here to insert the song
          }
        }
      }
    )
    widget.open() // open up the widget after creation
  }

  return (
    <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
      <h5 className="my-0 mr-md-auto font-weight-normal">
        Music Streaming App with Auth0 and Cloudinary
      </h5>
      <nav className="my-2 my-md-0 mr-md-3">
        <a className="p-2 text-success" href="/">
          Home
        </a>
        <a className="p-2 text-danger" href="/">
          Trending
        </a>
        <a className="p-2 text-info" href="/">
          Top Songs
        </a>
      </nav>
      {/* {isAuthenticated ? (
        <>
          <div>
            <Button
              id="btnUpload"
              className="btn margin"
              onClick={() => openWidget()}
              variant="primary"
            >
              Upload Song
            </Button>
            &nbsp;&nbsp;
            {/* <Logout /> 
          </div>
        </>
      ) : (
        <button>Button</button>
      )} */}
    </div>
  )
}
