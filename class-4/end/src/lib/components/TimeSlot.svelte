<script>
	import { appointment } from "$lib/stores/appointmentsStore";
	export let contents;

	/**
	 * This function displays the appointment details and sets the appointment store
	 * @param selectedAppointment
	 */
	const displayAppointmentDetails = (selectedAppointment) => {
		console.log(selectedAppointment);
		$appointment.name = selectedAppointment.appointment.name;
		$appointment.breed = selectedAppointment.appointment.breed;
		$appointment.starttime = selectedAppointment.starttime;
		$appointment.state = selectedAppointment.appointment.state;

	};
</script>

<div class="appointment" id={contents.id}>
	{#if contents.appointment}
		<ul class="bg-amber-100 flex flex-wrap justify-between rounded-lg p-2">
			<li class="rounded-l-lg p-1">{contents.starttime}</li>
			<li class="p-1">{contents.appointment.name}</li>
			<li class=""><button class="p-1 cursor-pointer hover:text-red-400 hover:rotate-45" on:click={() => displayAppointmentDetails(contents)}>⎋</button></li>
		</ul>
	{:else}
		<ul class="flex flex-wrap justify-between bg-slate-100 rounded-lg">
			<li class="bg-slate-100 mr-2 p-2 rounded-l-lg">{contents.starttime}</li>
			<li class="bg-slate-100 mr-2 p-2">---</li>
		</ul>
	{/if}
</div>
