import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateAppointmentInput } from "../dtos/inputs/create-appointment-input";
import { Appointment } from "../dtos/models/appointment-model";
import { Customer } from "../dtos/models/customer-model";

@Resolver(() => Appointment)
export class AppointmentsResolver {
  @Query(() => [Appointment])
  async appointments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      }
    ];
  }

  @Mutation(() => Appointment)
  async createAppointment(@Arg('data')data: CreateAppointmentInput) {
    const appointment = {
      startsAt: data.startDate,
      endsAt: data.endsAt,
    }

    return appointment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() apoointment: Appointment) {
    console.log(apoointment)

    return {
      name: "John Smith"
    }
  }
}