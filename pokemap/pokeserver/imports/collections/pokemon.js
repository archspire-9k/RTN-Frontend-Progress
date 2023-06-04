import {Mongo} from 'meteor/mongo';
import {Meteor} from 'meteor/meteor';

export const Pokemon = new.Mongo.Collections('pokemon');

Meteor.publish('pokemon', ()=>{
    return Pokemon.find({});
});