/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    console(method?: string): Chainable<Element>
  }
}
