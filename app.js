$(document).ready(function() {
    // Carregar tarefas existentes
    function loadTasks() {
        $.ajax({
            url: 'tasks.json',
            method: 'GET',
            dataType: 'json',
            success: function(data) {
                $('#task-list').empty();
                data.tasks.forEach(function(task) {
                    addTaskToDOM(task);
                });
            },
            error: function() {
                alert('Erro ao carregar as tarefas');
            }
        });
    }

    // Adicionar tarefa ao DOM
    function addTaskToDOM(task) {
        $('#task-list').append(
            `<li>${task} <button class="remove-task">Remover</button></li>`
        );
    }

    // Evento de clique para adicionar tarefa
    $('#add-task').click(function() {
        const newTask = $('#new-task').val();
        if (newTask) {
            addTaskToDOM(newTask);
            $('#new-task').val('');
        }
    });

    // Evento de clique para remover tarefa
    $('#task-list').on('click', '.remove-task', function() {
        $(this).parent().remove();
    });

    // Carregar tarefas ao iniciar a aplicação
    loadTasks();
});
