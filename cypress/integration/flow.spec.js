context('Register', () => {

  let rdnValue = Math.floor(Math.random() * 100)

  it('Enters the landing page and tries to go to the register page', () => {
    cy.visit('http://localhost:3000')
    cy.viewport(1440, 900)

    cy.wait(1000)
    cy.contains('Cadastre-se').click()
    cy.wait(1000)
  })

  it('Tries to register a new user', () => {
    cy.viewport(1440, 900)

    // cy.intercept('POST', '/register', {
    //   statusCode: 201,
    //   body: {
    //     email: "johndoe@mail.com",
    //     password: "$2a$10$N/QQ5ePqtKPAZcJntBNScei8qfEkhwYCt9TIxEDOXxhYwmHUXFaPi",
    //     name: "John Doe",
    //     phone: "(44)99562-4420",
    //     address: "Gen. Mário Tourinho, 1733, Curitiba",
    //     city: "Rio de Janeiro",
    //     isClient: true,
    //     id: 2
    //   }
    // }).as('new-user')

    

    cy.get('input[name=name]').type('hi')
    cy.wait(1500)
    cy.get('input[name=email]').type(`hi${rdnValue}@mail.com`)
    cy.wait(1500)
    cy.get('input[name=phone]').type('(44)99562-4420')
    cy.get('input[name=password]').type('12345*aA')
    cy.get('input[name=confirmPass]').type('12345*aA')

    cy.get('button[type=submit').click()

    cy.contains('Login')
  })

  it('tries to login', () => {
    cy.viewport(1440, 900)

    // cy.intercept('POST', '/login', {
    //   statusCode: 201,
    //   body: {
    //     accessToken: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImpvaG5kb2VAbWFpbC5jb20iLCJpYXQiOjE2NDM5MzIyODQsImV4cCI6MTY0MzkzNTg4NCwic3ViIjoiMiJ9.WbcVLACgvCran3VLMJbOsTNRWySIIRWuWjZuDP-Eu80",
    //     user: {
    //       email: "johndoe@mail.com",
    //       name: "John Doe",
    //       phone: "(44)99562-4420",
    //       address: "Gen. Mário Tourinho, 1733, Curitiba",
    //       isClient: true,
    //       id: 2
    //     }
    //   }
    // }).as('logged-user')

    cy.wait(1500)
    cy.get('input[name=email]').type(`hi${rdnValue}@mail.com`)
    cy.wait(1500)
    cy.get('input[name=password]').type('12345*aA')

    cy.get('button[type=submit').click()

    cy.contains('Login')
  })

  it('tries to create two pets', () => {
    cy.viewport(1440, 900)
    
    // create 1st one
    cy.get(':nth-child(2) > a').click()
    cy.contains('Meus Pets')

    cy.get('#add').click()

    cy.contains('Adicione seu pet')

    cy.get('input[name=petName]').type('Furioso')
    cy.get('[for="cachorro"]').click()
    cy.get('[for="male"]').click()
    cy.get('[for="pequeno"]').click()
    cy.get('input[name=petBirthDate]').type('2020-01-01')
    cy.get('.sc-eCImPb').click()

    //create 2nd one
    cy.get(':nth-child(2) > a').click()
    cy.contains('Meus Pets')

    cy.get('#add').click()

    cy.contains('Adicione seu pet')

    cy.get('input[name=petName]').type('Geléia')
    cy.get('[for="gato"]').click()
    cy.get('[for="female"]').click()
    cy.get('[for="grande"]').click()
    cy.get('input[name=petBirthDate]').type('2019-01-01')
    cy.get('.sc-eCImPb').click()

  })

  it('tries to edit one pet', () => {
    cy.viewport(1440, 900)
    
    cy.get(':nth-child(1) > .iconBox > svg').click()
    cy.contains('Altere as informações do seu pet')

    cy.get('[for="outro"]').click()

    cy.wait(1000)
    cy.get('input[name=petName]').type('Louco')
    cy.wait(1000)
    cy.get('[for="outro"]').click()
    cy.get('[for="female"]').click()
    cy.get('[for="médio"]').click()
    cy.get('input[name=petBirthDate]').type('2018-01-01')
    cy.get(':nth-child(2) > .sc-eCImPb').click()

  })

  it('tries to delete one pet', () => {
    cy.viewport(1440, 900)
    
    cy.get(':nth-child(2) > .iconBox > svg').click()
    cy.contains('Altere as informações do seu pet')

    cy.get(':nth-child(1) > .sc-eCImPb').click()

    // cy.wait(2000)
    // cy.get('input[name=petName]').type('Louco')
    // cy.wait(2000)
    // cy.get('[for="outro"]').click()
    // cy.get('[for="female"]').click()
    // cy.get('[for="médio"]').click()
    // cy.get('input[name=petBirthDate]').type('2018-01-01')
    // cy.get(':nth-child(2) > .sc-eCImPb').click()

  })

  it('tries to navigate to services', () => {
    cy.viewport(1440, 900)

    cy.get(':nth-child(3) > a').click()

    cy.contains('Selecione os serviços')
    
  })

  it('tries to create a training service', () => {
    cy.viewport(1440, 900)
    
    cy.get(':nth-child(1) > .inner > .sc-jrQzAO > h2').click({ force: true })
    cy.get('button[id=training]').should('be.hidden')

    cy.get('button[id=training]').click({ force: true })

    cy.contains('Solicitar')
    cy.contains('Selecione o tipo de adestramento')

    cy.get('select').select('Básico')

    cy.wait(1000)
    cy.get('input[name=serviceDesiredDate]').type('2022-02-05')
    cy.wait(1000)
    cy.get('input[name=serviceDesiredTime]').type('08:00')
    cy.wait(2000)

    cy.get('label').click()

    cy.get('[rows="1"]').type('note')

    cy.get(':nth-child(1) > .sc-eCImPb').click()
  })

  it('tries to create a walking service', () => {
    cy.viewport(1440, 900)
    
    cy.get(':nth-child(2) > .inner > .sc-jrQzAO > h2').click({ force: true })
    cy.wait(1000)
    cy.get('button[id=walk]').should('be.hidden')
    cy.wait(1000)

    cy.get('button[id=walk]').click({ force: true })

    cy.contains('Solicitar')
    cy.contains('Passeios educativos com duração de 1 hora.')

    cy.wait(1000)
    cy.get('input[name=serviceDesiredDate]').type('2022-02-06')
    cy.wait(1000)
    cy.get('input[name=serviceDesiredTime]').type('20:00')
    cy.wait(1000)

    cy.get('label').click()

    cy.get('[rows="1"]').type('custom note')

    cy.get(':nth-child(1) > .sc-eCImPb').click()
  })

  it('tries to create a taxi service', () => {
    cy.viewport(1440, 900)
    
    cy.get(':nth-child(3) > .inner > .sc-jrQzAO > h2').click({ force: true })
    cy.wait(1000)
    cy.get('button[id=taxi]').should('be.hidden')
    cy.wait(1000)

    cy.get('button[id=taxi]').click({ force: true })
    cy.wait(1000)

    cy.contains('Solicitar')
    cy.contains('Qual o endereço de origem?')

    cy.wait(500)
    cy.get('input[name=serviceDepartureStreet]').type('Rua das Acácias')
    cy.wait(500)
    cy.get('input[name=serviceDepartureNumber]').type('123')
    cy.wait(500)
    cy.get('input[name=serviceDepartureComplement]').type('px. supermercado')
    cy.wait(500)
    cy.get('input[name=serviceDepartureCity]').type('Oiapoque')
    cy.wait(500)
    
    cy.get('input[name=serviceArrivalStreet]').type('Rua das Laranjeiras')
    cy.wait(500)
    cy.get('input[name=serviceArrivalNumber]').type('456')
    cy.wait(500)
    cy.get('input[name=serviceArrivalComplement]').type('px. padaria')
    cy.wait(500)
    cy.get('input[name=serviceArrivalCity]').type('Chuí')
    cy.wait(500)
    
    cy.get('input[name=serviceDesiredDate]').type('2022-02-07')
    cy.wait(500)
    cy.get('input[name=serviceDesiredTime]').type('17:00')
    cy.wait(1000)

    cy.get('.petContainer_box > label').click()

    cy.get('[rows="1"]').type('custom note')

    cy.get(':nth-child(1) > .sc-eCImPb').click()
    cy.wait(1000)
  })

  it('tries to navigate to services', () => {
    cy.viewport(1440, 900)

    cy.get('.menuTop > :nth-child(1) > a').click()

    cy.contains('Perfil')
    
  })

  it('tries to update the profile user', () => {
    cy.viewport(1440, 900)
    
    cy.get('.sc-eCImPb').click()

    cy.contains('Perfil')
    cy.wait(1000)

    cy.get('.closeButton > svg > path').click()
  })

  it('tries to logout', () => {
    cy.viewport(1440, 900)
    
    cy.get('.sc-efQSVx > svg').click()

    cy.contains('Ajude Meu Pet')
  })

})
