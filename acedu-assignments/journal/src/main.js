import $ from 'jquery';
import {Journal,getTeaser} from './journal.js';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
$('#journal-form').submit(function (event) {
  event.preventDefault();
  let title = $('#title').val();
  let body = $('#body').val();
  let newJournal = new Journal(title, body);
  $('#wordCounter').text(newJournal.wordCounter());
  $('#vowelCounter').text(newJournal.charCounter()[0]);
  $('#consonantCounter').text(newJournal.charCounter()[1]);
  $('#getTeaser').text(getTeaser(body));
});
