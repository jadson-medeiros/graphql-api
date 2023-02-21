import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppointmentInput{
  @Field()
  customerId: string;

  @Field()
  startDate: Date;

  @Field()
  endsAt: Date;
}