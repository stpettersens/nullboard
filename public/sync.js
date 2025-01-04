function parseRecord(record) {
    // TODO
}

function uploadBoardData() {
    $.get('/clear_board_data', function(response) {
        for (let i = 0; i <= localStorage.length; i++) {
            $('#server').text(`Syncing note ${i}/${localStorage.length}...`)
            let note = `${localStorage.key(i)}=${localStorage.getItem(localStorage.key(i))}`;
            $.post('/upload_board_data', note, function(response) {
                $('#server').text('Sync up done.');
            });
        }
    })
}

function downloadBoardData() {
    $.get('/download_board_data', function(data) {
        $('#server').text('Sync down done.');
    });
}

$(document).ready(function() {
    downloadBoardData();
});
