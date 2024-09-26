<script>
	import { appointment } from '$lib/stores/appointmentsStore';
</script>

<div>
	<div
		id="details"
		class="basis-2/6 bg-teal-100 rounded-lg mt-10 lg:mt-0 p-10 transition ease-in-out delay-150"
	>
		<h2 class="text-3xl">Details</h2>
		<table class="mt-4">
			<tbody>
				<tr>
					<td>Reference nr</td>
					<td>{$appointment.starttime}</td>
				</tr>
				<tr>
					<td>Pet name</td>
					<td>{$appointment.name}</td>
				</tr>
				<tr>
					<td>Breed</td>
					<td>{$appointment.breed}</td>
				</tr>
				<tr>
					<td>State</td>
					<td>{$appointment.state}</td>
				</tr>
			</tbody>
		</table>
        <h3 class="mt-4 text-xl">Diagnosis</h3>
        <h3 class="mt-4 text-xl">Previous appointments</h3>
        <table>
			<tbody>
				<tr>
					<td>2023-10-09</td>
                    <td>⇲</td>
				</tr>
				<tr>
                    <td>2022-09-22</td>
					<td>⇲</td>
					
				</tr>
			</tbody>
		</table>
	</div>
</div>
