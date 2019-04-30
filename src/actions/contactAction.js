import {
    GET_CONTACTS,
    DEL_CONTACTS,
    ADD_CONTACTS
} from './types';




export const getContacts = () => {
    return {
        type: GET_CONTACTS
    }
}

export const delContact = (id) => {
    return {
        type: DEL_CONTACTS,
        payload:id
    }
}

export const addContact = (contact) => {
    return {
        type: ADD_CONTACTS,
        payload:contact
    }
}