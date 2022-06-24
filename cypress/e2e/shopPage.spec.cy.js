/* eslint-disable */
describe('shopPage', () => {
  it('should visit shop page', () => {
    cy.visit('http://localhost:3000/shop')
  })

  it('slider price', () => {
    cy.get('.ant-slider-handle-1')
      .trigger('mousedown', { which: 1 })
      .trigger('mousemove', { clientX: 600 })
      .trigger('mouseup', { force: true })
  })

  it('type chosen', () => {
    cy.get('.ant-checkbox-input').eq(3).click()
    cy.get('.ant-checkbox-input').eq(4).click()
  })

  it('type input', () => {
    cy.get('.ant-input').eq(0).type('fu')
  })

  it('click pagination', () => {
    cy.get('.ant-pagination-item-link').eq(1).click()
    cy.get('.ant-pagination-item-link').eq(0).click()
  })
})
