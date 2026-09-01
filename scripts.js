// TODO: change registration link; committe list; partners; program

const edition = "15th";
const year = 2026;
const month = "September";
const days = "21";
const place = "Vitória, Brazil";
const registrationLink = "";
const uploadPapersLink = "https://easychair.org/my/conference?conf=fois2026"
const JOWOlink = "http://iaoa.org/jowo/";

const importantDates = 
'<li> Paper submission deadline: <strike>3 June 2026</strike> 17 June 2026</li>\n' +
'<li> Notification of acceptance:  15 July 2026 </li>\n' +
'<li> Camera-ready submission: 31 July 2026 </li>\n'+
'<li> JOWO workshop days co-located with FOIS 2026: 21-22 September 2026 </li>\n'+
'<li> FOMI workshop day: 21 September 2026 </li>\n'


const events = [ // Array of date and text pairs
    // { date: "July 2, 2021", text: "The deadline for submission of papers for FOMI2021 has been extend until 9. July 2021." },
    // { date: "May 27, 2021", text: "We partnered with the Industrial Ontologies Foundry (IOF) to join efforts and present its current activities as part of the FOMI 2021 workshop." },
    // { date: "May 27, 2021", text: "We partnered with the OntoCommons project to join efforts and present a special session on OntoCommons activities as part of the FOMI 2021 workshop." },
    // { date: "Gen 15, 2024", text: "FOMI 2024 web site is public." },
    // { date: "Feb 02, 2024", text: "Updated call dates." },
    // { date: "Jun 27, 2024", text: "Program online." },
    // { date: "Jul 16, 2024", text: "FOMI workshop." },
];
const organizers = [
    { name: "João Luiz Rebelo Moreira", email: "j.luizrebelomoreira@utwente.nl" },
    { name: "Emilio M. Sanfilippo", email: "emilio.sanfilippo@cnr.it" },
    { name: "Walter Terkaj", email: "walter.terkaj@cnr.it" },
]
const committeeList = '<li>Alessandro Oltramari, Bosch, USA</li>' +
'<li>Alessandro Umbrico, CNR-STIIMA, Italy</li>' +
'<li>Alex Donkers, Eindhoven University of Technology, Netherlands</li>' +
'<li>Bahar Aameri, University of Toronto, Canada</li>' +
'<li>Claudenir Fonseca, University of Twente, Netherlands</li>' +
'<li>Cornelis Bouter, TNO, Netherlands</li>' +
'<li>Daniele Spoladore, CNR-STIIMA, Italy</li>' +
'<li>Elisa Negri, Politecnico di Milano, Italy</li>' +
'<li>Fabio Longo, CNR-STIIMA, Italy</li>' +
'<li>Francesco Zaccarini, University of Bologna, Italy</li>' +
'<li>Kelli Cordeiro, Ministry of Defense, Brazil</li>' +
'<li>Laure Vieu, IRIT-CNRS, France</li>' +
'<li>María Poveda, Universidad Politécnica de Madrid, Spain</li>' +
'<li>Pieter Pauwels, Eindhoven University of Technology, Netherlands</li>' +
'<li>Rodrigo Calhau, IFES, Brazil</li>' +
'<li>Rebeca Arista, Airbus, France</li>' +
'<li>Riichiro Mizoguchi, Japan Advanced Institute of Science and Technology, Japan</li>' +
'<li>Silvia Chiacchiera, STFC UKRI, UK</li>' +
'<li>Stefano Borgo, CNR-STIIMA, Italy</li>' +
'<li>Peter Klein, Fraunhofer ITWM, Germany</li>'


function createTable() {
    var tableHTML = '';

    events.forEach(function (event) {
        tableHTML += '<tr><td>' + event.date + '</td><td>' + event.text + '</td></tr>';
    });

    return tableHTML;
}
function createOrganizersList() {
    var list = '';

    organizers.forEach(function (organizer) {
        list += '<li>' + organizer.name + '</li><ul><li> Email: <a href="mailto:' + organizer.email + '">'+organizer.email+'</a></ul>';
    });

    return list;
}

function pprint(variable) { // wrapper for the deprecated document.write
    document.write(variable);
} 

const newsTable = createTable();
const organizersList = createOrganizersList();
const date = days + " "+ month + " " + year;
const title = edition + " International Workshop on Formal Ontologies meet Industry";
