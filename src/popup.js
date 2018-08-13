const faker = require('faker');

function getTableRowHtml(obj) {
    return `
        <tr>
            <td>${obj.id}</td>
            <td>${obj.operator}</td>
        </tr>
    `;
}

export function getPopupContent(obj) {

    let content = `
        <div class="station-info">
            <div class="station-info-label">drones info</div>
        </div>
    `;

    if (obj.isActive) {

        obj.drones = [];

        for (var i = 0; i < obj.connections; i++) {

          obj.drones[i] = {};
          obj.drones[i].id = i + 1;
          obj.drones[i].operator = faker.name.findName();
        }

        const htmlRows = obj.drones.map(getTableRowHtml).join('\n');

        const htmlTable = `
            <table class="station-info-drones-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>operator</th>
                    </tr>
                </thead>
                <tbody>
                    ${htmlRows}
                </tbody>
            </table>
        `;

        content += htmlTable;

    } else {

      content += `<div class="station-info-connections">No drones available</div>`;
    }

    return content;
}