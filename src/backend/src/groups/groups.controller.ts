import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { GroupsService } from './groups.service';
import { CreateGroupDto } from './dto/create-group.dto';
import { UpdateGroupDto } from './dto/update-group.dto';

@Controller('groups')
export class GroupsController {
  constructor(private readonly groupsService: GroupsService) {}

  @Post()
  create(@Body() createGroupDto: CreateGroupDto) {
    return this.groupsService.create(createGroupDto);
  }

  // @Post()
  // groupMemberCheckInToGroup(@Body() checkinParams: any) {
  //   return this.groupsService.groupMemberCheckInToGroup("khuranajapnit@gmail.com", "abcd", {});
  // }

  @Get()
  findAll() {
    return this.groupsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupsService.findOne(+id);
  }

  @Get('active-groups/:email')
  getActiveGroupsForUser(@Param('email') email: string) {
    return this.groupsService.getActiveGroupsForUser(email);
  }

  @Get('inactive-groups/:email')
  getInactiveGroupsForUser(@Param('email') email: string) {
    return this.groupsService.getInactiveGroupsForUser(email);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupDto: UpdateGroupDto) {
    return this.groupsService.update(+id, updateGroupDto);
  }


  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupsService.remove(+id);
  }
}
