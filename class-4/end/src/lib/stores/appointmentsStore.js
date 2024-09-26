import { writable } from 'svelte/store';

export const appointment = writable({
  starttime: 'number of the customer',
  date: 'date of the appointment',
  name: 'name of the pet',
  breed: 'breed of the pet of the customer',
  state: 'state of the appointment',
});

//write custom functions to update the store