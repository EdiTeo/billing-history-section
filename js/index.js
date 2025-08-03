// Write custom JavaScript here.
// You may ignore this file and delete if if JavaScript is not required for your challenge.
// alt+shift+flecha abajo  copiar
// ctrl+shift+k  borrar
window.addEventListener('load', () => {
    document.getElementById('loader').classList.add('hidden');
    document.getElementById('mainContent').classList.remove('hidden');
  });
const dercarga = document.getElementById('descargar');
document.addEventListener(
    'DOMContentLoaded', async()=>{
        const tbody = document.querySelector('tbody');
        try {
            const res = await fetch('https://www.greatfrontend.com/api/projects/challenges/account/billing/history')
            const json = await res.json();
            const data = json.data;
            tbody.innerHTML=''
            data.forEach(i => {
                const date = new Date(i.created_at).toLocaleDateString('en-US',{
                    year:'numeric',month:'short',day:'numeric'
                });
                const row=document.createElement('tr')
                row.innerHTML=`
                <td class="p-6 border-b border-blue-gray-50">
                <div class="flex flex-col">
                  <p
                    class="block text-sm antialiased font-normal font-bold leading-normal text-blue-gray-900">
                    ${date}
                  </p>
                </div>  
              </td>
              <td class="p-6 border-b border-blue-gray-50">
                <div class="w-max">
                  <div class="relative grid border-b items-center px-2 py-1 text-sm font-bold text-green-700 rounded-2xl select-none whitespace-nowrap bg-green-500/20">
                    <span class="">${i.status}</span>
                  </div>
                </div>
              </td>
              <td class="p-6 border-b border-blue-gray-50">
              <p class="block text-sm antialiased font-normal font-bold leading-normal text-blue-gray-900">
               ${i.amount.toFixed(2)}
              </p>
              </td>
              <td class="p-6 border-b border-blue-gray-50">
                <p class="block text-sm antialiased font-normal font-bold leading-normal text-blue-gray-900">
                ${i.plan}
                </p>
              </td>
              <td class="p-6 border-b border-blue-gray-50">
                <p
                    class="block text-sm antialiased font-mediums">
                  <a id='descargar' href="${i.invoice_url}" class="block text-sm antialiased font-medium leading-normal text-blue-600" target="_blank" rel="noopener noreferrer">
                    Download
                  </a>
                </p>
              </td>
                `
                tbody.appendChild(row)
            });
        } catch (error) {
            console.error('Error al obtener datos de billing',error);

        }
    }
)
