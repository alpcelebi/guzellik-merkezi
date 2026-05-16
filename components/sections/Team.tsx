"use client";

import { motion } from "framer-motion";
import { User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { team } from "@/data/team";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function Team() {
  return (
    <section className="py-20 md:py-28">
      <Container>
        <SectionHeader
          subtitle="Ekibimiz"
          title="Uzman Kadromuz"
          description="Güzellik yolculuğunuzda size eşlik edecek deneyimli profesyonellerimiz"
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {team.map((member) => (
            <motion.div key={member.id} variants={itemVariants}>
              <Card className="group overflow-hidden border-0 bg-gradient-to-br from-background to-muted/30 shadow-sm transition-all duration-300 hover:shadow-lg">
                {/* Avatar */}
                <div className="relative mx-auto mt-6 h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-rose-100 to-amber-50">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <User className="h-16 w-16 text-primary/30" />
                  </div>
                </div>

                <CardContent className="p-6 text-center">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-primary">
                    {member.role}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {member.bio}
                  </p>

                  {/* Specialties */}
                  <div className="mt-4 flex flex-wrap justify-center gap-2">
                    {member.specialties.slice(0, 3).map((specialty, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {specialty}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
