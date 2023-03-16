const update = document.querySelector('#update-button')

update.addEventListener('click', _ => {
    fetch('/quotes', {
      method: 'put',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Duke of Wellington',
        quote: 'The whole art of war consists of guessing at what is on the other side of the hill.'
      })
    })
  })