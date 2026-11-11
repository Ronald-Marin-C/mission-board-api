import { PartialType } from "@nestjs/mapped-types";
import { CreateMissionDto } from "./create-mission.dto.js";
import { IsIn, IsOptional } from "class-validator";

export class UpdateMissionDto extends PartialType(CreateMissionDto){
    @IsOptional()
    @IsIn(['OPEN', 'FAILED'])
    status?: string;
}