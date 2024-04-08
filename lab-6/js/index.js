/*
  HTML for the project.
  Template
  <div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>
*/

async function getContacts(url){
  const res = await fetch (url)
    return await res.json()
}


async function appInit(){
    getRequest('https://660f4fff356b87a55c5127d2.mockapi.io/api/v1/contacts')
}

appInit()

async function renderContacts
<div class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">FULLNAME HERE</h5>
    </div>
  <small>EMAIL HERE<</small>
  </div>