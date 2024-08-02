const documentsOrder = ['C', 'CPP', 'PYTHON', 'MATLAB', 'CA', 'OS', 'NETWORK'];

// c-lang
const c = [];

// C++
const cpp =[
  { no: 4, date: '2024-08-02', kor_title: 'MacOS 소프트웨어 업데이트 후 발생하는 GCC/G++ 및 컴파일 문제', eng_title: 'GCC/G++ Compilation Problem after MacOS Software Update', link: 'gnu_on_mac.html' },
  { no: 3, date: '2024-02-15', kor_title: 'MacOS에서 C/C++ 세팅', eng_title: 'C/C++ Setup on MacOS ', link: 'mac_setting.html' },
  { no: 2, date: '2022-01-24', kor_title: 'using namespace std는 그만 써야 한다?', eng_title: 'Do not use using namespace std!', link: 'macro_stdio.html' },
  { no: 1, date: '2022-01-24', kor_title: 'C++ 예제 문제', eng_title: 'C++ Exercise Problems',link: 'problems.html' },
  // Add more documents here
];

// python
const python = [];

// Matlab
const matlab =[
  { no: 1, date: '2022-06-17', kor_title: 'MATLAB으로 상미분방정식 풀기', eng_title: 'Solve ODE with MATLAB',  link: 'ode_solver.html' },
  // Add more documents here
];

// Computer Architecture
const ca = [];

// Operating System
const os = [
  { no: 2, date: '2023-06-02', title: 'Document 2', link: 'docs/doc2.html' },
];

// Computer Network
const network = [];

// List to possess the file lists
const documentsList = [c, cpp, python, matlab, ca, os, network];
const maxDocuments = 15;

let documents;
let currentPage = 1;
let documentList;
let pagination;
let extractedDirectory; // ./CPP/problems.html -> CPP

document.addEventListener('DOMContentLoaded', function() {
    // Extract the 'abc' part from the path '../abc/test.html'
    const pathParts = window.location.pathname.split('/');
    extractedDirectory = pathParts[pathParts.length - 2];
    console.log('AEL/ Extracted Directory:', extractedDirectory);  // Logs the stored value

    for (let i = 0; i < documentsOrder.length; i++){
      if (documentsOrder[i] === extractedDirectory){
        // extract current directory
        documents = documentsList[i]
      }
    }

    // Now show the content list
    documentList = document.getElementById('document-list');
    pagination = document.getElementById('pagination');
    displayDocuments(documents, currentPage);
    updatePagination(documents, currentPage);
});


function displayDocuments(docs, page) {
    documentList.innerHTML = '';
    const start = (page - 1) * maxDocuments;
    const end = start + maxDocuments;
    const pageDocuments = docs.slice(start, end);

    for (let doc of pageDocuments) {
        const card = document.createElement('div');
        card.className = 'document-card';
        card.style.cursor = 'pointer';

        // make a div section whole clickable
        card.addEventListener('click', ()=>{
          //perform the desired action when the div is clicked
          // go to the post
          window.location.href=doc.link
        });
        card.innerHTML = `
            <h2 class="doc-title kor-text">${doc.kor_title}</h2>
            <h2 class="doc-title eng-text">${doc.eng_title}</h2>
            <p>#${doc.no}: ${doc.date}</p>
            <a href="${doc.link}">Go to Read</a>
        `;
        documentList.appendChild(card);
    }
}

function updatePagination(docs, page) {
    pagination.innerHTML = '';
    const totalPages = Math.ceil(docs.length / maxDocuments);

    for (let i = 1; i <= totalPages; i++) {
        const pageItem = document.createElement('button');
        pageItem.className = 'pagination-item';
        pageItem.textContent = i;
        if (i === page) {
            pageItem.classList.add('active');
        }
        pageItem.addEventListener('click', function() {
            currentPage = i;
            displayDocuments(docs, currentPage);
            updatePagination(docs, currentPage);
        });
        pagination.appendChild(pageItem);
    }
}
